import * as Enums from "@/enums"
import { useGetAllHomework } from "@/services"
import Markdown from "markdown-to-jsx"

const tableKeys = ["آیدی", "کلاس", "اهمیت", "وضعیت", "توضیحات"]

function HomeworkTable() {
  const [homework] = useGetAllHomework(null)

  if (!homework) return "درحال بارگذاری... (اگه خیلی وقته که نیومده، احتمالا مشکل داره‌ها...)"
  if (homework && homework.length < 1) return "هورا! 🥳 هیچ مشقی نداریم؛ برو حالشو ببر"

  return (
    <div className="table-container">
      <table
        className="table is-bordered is-striped is-hoverable is-fullwidth"
        style={{ minWidth: "max-content" }}
      >
        <thead>
          <tr>
            {tableKeys.map(key => (
              <th className="has-text-right" key={key}>
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {homework.map(hw => (
            <tr key={hw.id}>
              <td>{hw.id}</td>
              <td>{Enums.LessonsName[hw.lesson]}</td>
              <td>
                {hw.priority === Enums.HomeworkPriority.A && (
                  <span className="tag is-danger">A</span>
                )}
                {hw.priority === Enums.HomeworkPriority.B && (
                  <span className="tag is-warning">B</span>
                )}
                {hw.priority === Enums.HomeworkPriority.C && <span className="tag is-info">C</span>}
                {hw.priority === Enums.HomeworkPriority.D && <span className="tag is-dark">D</span>}
              </td>
              <td>
                {hw.status === Enums.HomeworkStatus.Pending && <span>🔁</span>}
                {hw.status === Enums.HomeworkStatus.Done && <span>✅</span>}
                {hw.status === Enums.HomeworkStatus.Cancelled && <span>❌</span>}
              </td>
              <td style={{ textOverflow: "ellipsis" }}>
                <Markdown>{hw.description}</Markdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { HomeworkTable }
