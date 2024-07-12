import { departments } from '@/data/department'
import { queryClient } from '@/db'
import { createDepartments, removeAllDepartments } from '@/db/query/department'

const seed = async () => {
  await removeAllDepartments()
  await createDepartments(departments)
  await queryClient.end()
}
seed()
