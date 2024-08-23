import { create } from 'zustand'

import { Activity } from '@/types/plan'

const initialState: Activity = {
  id: '',
  planId: '',
  dayId: '',
  activityName: '',
  activityPlaceName: '',
  activityDetail: '',
  activityExpense: 0,
  category: '',
}

type ActivityStore = {
  activity: Activity
  editingActivityId: string
  setActivity: (activity: Activity) => void
  setEditingActivityId: (id: string) => void
}

export const useActivityStore = create<ActivityStore>((set) => ({
  activity: initialState,
  editingActivityId: '',
  setActivity: (activity) => set({ activity }),
  setEditingActivityId: (id) => set({ editingActivityId: id }),
}))
