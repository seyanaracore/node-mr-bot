import type {ValueOf} from 'type-fest'
import type { ProjectId } from "../src/enums/project";

export type ExcludedMrItem = {
  iid: number;
  projectId: ValueOf<typeof ProjectId>;
}
