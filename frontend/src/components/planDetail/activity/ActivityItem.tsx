import { FiEdit3 } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

import ButtonItem from '@/components/common/ButtonItem'
import { dayCategories } from '@/constants'
import { useActivityStore } from '@/store/activity'
import { Activity } from '@/types/plan'
import { cn } from '@/utils/cn'

type Props = {
  activity: Activity
  editingActivityId: string
  setEditingActivityId: (id: string) => void
}

type EditActivityProps = {
  editingItem: Activity
  setActivity: (activity: Activity) => void
  handleSaveClick: () => void
  handleCancelClick: () => void
}

type ShowActivityProps = {
  activity: Activity
}

function EditActivity({
  editingItem,
  setActivity,
  handleSaveClick,
  handleCancelClick,
}: EditActivityProps) {
  return (
    <div>
      <div className="mb-3 flex items-center">
        <div className="w-20 font-bold">카테고리</div>
        <div className="grid grid-cols-4">
          {dayCategories.map((category, index) => {
            const isSelected = category.name === editingItem.category

            return (
              <div
                key={index}
                className={cn([
                  'm-1 rounded-lg',
                  isSelected ? 'border border-gray-300 shadow-container' : '',
                  category.color,
                ])}
              >
                <ButtonItem
                  name={category.name}
                  onClick={() =>
                    setActivity({ ...editingItem, category: category.name })
                  }
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="mb-3 flex">
        <div className="w-20 font-bold">활동명</div>
        <input
          type="text"
          className="rounded-lg border px-2 py-1"
          value={editingItem.activityName}
          onChange={(e) =>
            setActivity({
              ...editingItem,
              activityName: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-3 flex">
        <div className="w-20 font-bold">장소</div>
        <input
          type="text"
          className="rounded-lg border px-2 py-1"
          value={editingItem.activityPlaceName}
          onChange={(e) =>
            setActivity({
              ...editingItem,
              activityPlaceName: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-3 flex">
        <div className="w-20 font-bold">메모</div>
        <input
          type="text"
          className="rounded-lg border px-2 py-1"
          value={editingItem.activityDetail}
          onChange={(e) =>
            setActivity({
              ...editingItem,
              activityDetail: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-3 flex">
        <div className="w-20 font-bold">경비</div>
        <input
          type="number"
          className="rounded-lg border px-2 py-1"
          value={editingItem.activityExpense}
          onChange={(e) =>
            setActivity({
              ...editingItem,
              activityExpense: Number(e.target.value),
            })
          }
        />
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleSaveClick}
          className="flex w-full items-center justify-center rounded-lg bg-blue-500 p-2 text-white"
        >
          수정
        </button>
        <button
          onClick={handleCancelClick}
          className="w-full rounded-lg border border-gray-300 bg-white px-2 py-2 text-gray-400"
        >
          취소
        </button>
      </div>
    </div>
  )
}

function ShowActivity({ activity }: ShowActivityProps) {
  const categoryName = dayCategories.find(
    (category) => category.name === activity.category
  )?.name
  const categoryColor = dayCategories.find(
    (category) => category.name === activity.category
  )?.color

  return (
    <div>
      <div className="mb-3 flex">
        <div className="w-20 font-bold">카테고리</div>
        <button
          className={cn([`rounded-lg px-2 py-1 text-xs ${categoryColor}`])}
        >
          {categoryName}
        </button>
      </div>
      <div className="mb-3 flex">
        <div className="w-20 font-bold">활동명</div>
        <div>{activity.activityName}</div>
      </div>
      <div className="mb-3 flex">
        <div className="w-20 font-bold">장소</div>
        <div>{activity.activityPlaceName}</div>
      </div>
      <div className="mb-3 flex">
        <div className="w-20 font-bold">메모</div>
        <div>{activity.activityDetail}</div>
      </div>
      <div className="flex">
        <div className="w-20 font-bold">경비</div>
        <div>{activity.activityExpense}</div>
      </div>
    </div>
  )
}

function ActivityItem({ activity }: Props) {
  const {
    activity: editingItem,
    editingActivityId,
    setActivity,
    setEditingActivityId,
  } = useActivityStore()

  const handleEditClick = () => {
    setEditingActivityId(activity.id)
    setActivity(activity)
  }

  const handleSaveClick = () => {
    // acitivy 수정 api 콜
    console.log(editingItem)
    setEditingActivityId('')
  }

  const handleCancelClick = () => {
    setEditingActivityId('')
  }

  return (
    <div className="text-s mb-3 max-w-md rounded-lg border border-gray-300 bg-gray-100 p-4">
      <div className="flex justify-end space-x-2">
        <button onClick={handleEditClick}>
          <FiEdit3 />
        </button>
        <RiDeleteBin6Line />
      </div>

      {editingActivityId === activity.id ? (
        <EditActivity
          editingItem={editingItem}
          setActivity={setActivity}
          handleSaveClick={handleSaveClick}
          handleCancelClick={handleCancelClick}
        />
      ) : (
        <ShowActivity activity={activity} />
      )}
    </div>
  )
}

export default ActivityItem
