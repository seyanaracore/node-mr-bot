import type { CamelCaseKeys } from '@/helpers/toCamelCase'

type MergeRequestListItemRaw = {
  id: number
  iid: number
  project_id: number
  title: string
  description: string
  state: 'opened' | 'merged'
  created_at: string
  updated_at: string
  merged_by?: {
    id: number
    username: string
    name: string
    state: string
    avatar_url: string
    web_url: string
  }
  merge_user?: {
    id: number
    username: string
    name: string
    state: string
    avatar_url: string
    web_url: string
  }
  merged_at?: string
  closed_by: never
  closed_at: never
  target_branch: string
  source_branch: string
  user_notes_count: number
  upvotes: number
  downvotes: number
  author: {
    id: number
    username: string
    name: string
    state: string
    avatar_url: string
    web_url: string
  }
  assignees: {
    id: number
    username: string
    name: string
    state: string
    avatar_url: string
    web_url: string
  }[]
  assignee?: {
    id: number
    username: string
    name: string
    state: string
    avatar_url: string
    web_url: string
  }
  reviewers: {
    id: number
    username: string
    name: string
    state: string
    avatar_url: string
    web_url: string
  }[]
  source_project_id: number
  target_project_id: number
  labels: never
  draft: boolean
  work_in_progress: boolean
  milestone: never
  merge_when_pipeline_succeeds: boolean
  merge_status: string
  detailed_merge_status: string
  sha: string
  merge_commit_sha?: string
  squash_commit_sha: never
  discussion_locked: never
  should_remove_source_branch?: boolean
  force_remove_source_branch: boolean
  reference: string
  references: {
    short: string
    relative: string
    full: string
  }
  web_url: string
  time_stats: {
    time_estimate: number
    total_time_spent: number
    human_time_estimate: never
    human_total_time_spent: never
  }
  squash: boolean
  squash_on_merge: boolean
  task_completion_status: {
    count: number
    completed_count: number
  }
  has_conflicts: boolean
  blocking_discussions_resolved: boolean
  approvals_before_merge: never
}

export type ApprovedByItem = {
  name: string
  username: string
}

export type DiscussionItem = {
  discussion: {
    id: number
    resolved: boolean
    resolvable: boolean
  }
  author: {
    name: string
    username: string
  }
}

export type MergeRequestInfo = {
  data: {
    project: {
      mergeRequest: {
        id: string
        discussions: {
          nodes: {
            notes: {
              edges: {
                node: DiscussionItem
              }[]
            }
          }[]
        }
        approvedBy: {
          edges: {
            node: ApprovedByItem
          }[]
        }
      }
    }
  }
}

export type MergeRequestListItem = CamelCaseKeys<MergeRequestListItemRaw>

// https://docs.gitlab.com/ee/api/merge_requests.html
export type GetMrListRequestParams = {
  state: 'opened' | 'merged' | 'closed' | 'locked'
}

export type GetMrListResponse = MergeRequestListItem[]
