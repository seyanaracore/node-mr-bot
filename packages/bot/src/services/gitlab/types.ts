import type { GitlabModule } from '@/api/modules/gitlab'

export type MergeRequestFull = GitlabModule.MergeRequestListItem & {
  approvedBy: GitlabModule.ApprovedByItem[]
  discussions: GitlabModule.DiscussionItem[]
}
