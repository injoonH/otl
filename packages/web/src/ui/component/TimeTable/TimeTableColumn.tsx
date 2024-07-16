import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

import styles from './TimeTableColumn.module.css'
import { type Time, deltaTimeToPixel, getPreviousTime } from './helper'

const eventBgColors = [
  '#f87171',
  '#fb923c',
  '#fcd34d',
  '#a3e635',
  '#2dd4bf',
  '#22c55e',
  '#38bdf8',
  '#818cf8',
  '#a78bfa',
  '#e879f9',
  '#fb7185',
] as const

type TimeTableColumnProps = {
  start: number
  end: number
  events?: { id: number; start: Time; end: Time }[]
}

export const TimeTableColumn: React.FC<TimeTableColumnProps> = ({
  start,
  end,
  events,
}) => {
  const [panStartTime, setPanStartTime] = useState<Time | null>(null)
  const [panEndTime, setPanEndTime] = useState<Time | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const getPointedStartTime = (event: PointerEvent) => {
    const element = ref.current
    if (!element) return null

    const rect = element.getBoundingClientRect()
    const y = event.clientY - rect.top
    if (y < 0 || y > rect.height) return null

    const ratio = y / rect.height
    const ticks = Math.floor(ratio * (end - start) * 2) // One tick is 30 minutes
    return {
      hour: start + Math.floor(ticks / 2),
      minute: ticks % 2 === 0 ? 0 : 30,
    }
  }

  return (
    <motion.div
      ref={ref}
      className={styles.timeTableColumn}
      onPanStart={(event) => {
        const time = getPointedStartTime(event)
        if (!time) return
        setPanStartTime(time)
        setPanEndTime(time)
      }}
      onPan={(event) => {
        const time = getPointedStartTime(event)
        if (!time) return
        setPanEndTime(time)
      }}
      onPanEnd={() => {
        setPanStartTime(null)
        setPanEndTime(null)
      }}
    >
      {/* Events */}
      {events?.map((event) => (
        <div
          key={event.id}
          className={styles.event}
          style={{
            top: `${deltaTimeToPixel({ hour: start, minute: 0 }, getPreviousTime(event.start, event.end))}px`,
            height: `${deltaTimeToPixel(event.start, event.end)}px`,
            borderLeftColor: `${eventBgColors[event.id % eventBgColors.length]}44`,
            backgroundColor: `${eventBgColors[event.id % eventBgColors.length]}44`,
          }}
        />
      ))}
      {/* Panning */}
      {panStartTime && panEndTime && (
        <div
          className={styles.panning}
          style={{
            top: `${deltaTimeToPixel({ hour: start, minute: 0 }, getPreviousTime(panStartTime, panEndTime))}px`,
            height: `${deltaTimeToPixel(panStartTime, panEndTime) + 30}px`,
          }}
        />
      )}
    </motion.div>
  )
}
