import { ProjectId } from '@packages/common/dist/enums/project'

export const projectOptions = Object.entries(ProjectId).map(([label, value]) => ({ label, value }))
