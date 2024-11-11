import invertObj from '../helpers/invertObj'

// Object.values на енам выводит и ключи и значения

export const ProjectId = {
  LMS: 185,
  LMS_ADMIN: 300,
  LMS_ADMIN_NEW: 393,
  EDCHEK: 342,
  EDCHEK_ADMIN: 346,
  LK: 256,
  LK_ADMIN: 306,
} as const

export const ProjectName = invertObj(ProjectId)
