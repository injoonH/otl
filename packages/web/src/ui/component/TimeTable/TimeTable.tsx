import styles from './TimeTable.module.css'
import { TimeTableColumn } from './TimeTableColumn'
import { columns } from './data'

type TimeTableProps = {
  start: number
  end: number
}

export const TimeTable: React.FC<TimeTableProps> = ({ start, end }) => {
  const times = [...Array(end - start + 1).keys()].map((el) => el + start)

  return (
    <div className={styles.timeTable}>
      {/* Time */}
      <div className={styles.timeList} aria-hidden>
        {times.map((time) => (
          <div key={time} className={styles.time}>
            <span>
              {((time - 1) % 12) + 1} {time < 12 ? 'AM' : 'PM'}
            </span>
          </div>
        ))}
      </div>
      {/* Main Section */}
      <div className={styles.gridContainer}>
        {/* Grid Lines */}
        <div aria-hidden>
          {[...Array(end - start).keys()].map((el) => (
            <hr key={el} className={styles.gridLine} />
          ))}
        </div>
        {/* Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
            width: '100%',
          }}
        >
          {columns.map((column) => (
            <TimeTableColumn
              key={column.title}
              start={start}
              end={end}
              events={column.events}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
