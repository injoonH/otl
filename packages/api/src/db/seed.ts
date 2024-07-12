import { categories } from '@/data/category'
import { departments } from '@/data/department'
import { queryClient } from '@/db'
import { createCategories, removeAllCategories } from '@/db/query/category'
import { createDepartments, removeAllDepartments } from '@/db/query/department'

const seed = async () => {
  await removeAllDepartments()
  await removeAllCategories()

  await createDepartments(departments)
  await createCategories(categories)

  await queryClient.end()
}
seed()
