import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/Constants";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({
  auth,
  totalPendingTasks,
  myPendingTasks,
  totalProgressTasks,
  myProgressTasks,
  totalCompletedTasks,
  myCompletedTasks,
  activeTasks,
}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-gray-800 dark:text-gray-200 text-xl leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="gap-2 grid grid-cols-3 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="font-semibold text-amber-500 text-2xl">
                Pending Tasks
              </h3>
              <p className="mt-4 text-xl">
                <span className="mr-2">{myPendingTasks}</span>/
                <span className="ml-2">{totalPendingTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="font-semibold text-blue-500 text-2xl">
                In Progress Tasks
              </h3>
              <p className="mt-4 text-xl">
                <span className="mr-2">{myProgressTasks}</span>/
                <span className="ml-2">{totalProgressTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="font-semibold text-green-500 text-2xl">
                Completed Tasks
              </h3>
              <p className="mt-4 text-xl">
                <span className="mr-2">{myCompletedTasks}</span>/
                <span className="ml-2">{totalCompletedTasks}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg overflow-hidden">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="font-semibold text-gray-200 text-xl">
                My Active Tasks
              </h3>

              <table className="mt-3 w-full text-gray-500 dark:text-gray-400 text-sm text-left rtl:text-right">
                <thead className="bg-gray-50 dark:bg-gray-700 border-gray-500 border-b-2 text-gray-700 dark:text-gray-400 text-xs uppercase">
                  <tr>
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Project Name</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTasks.data.map((task) => (
                    <tr key={task.id}>
                      <td className="px-3 py-2">{task.id}</td>
                      <td className="px-3 py-2 text-white hover:underline">
                        <Link href={route("project.show", task.project.id)}>
                          {task.project.name}
                        </Link>
                      </td>
                      <td className="px-3 py-2 text-white hover:underline">
                        <Link href={route("task.show", task.id)}>
                          {task.name}
                        </Link>
                      </td>
                      <td className="px-3 py-2">
                        <span
                          className={
                            "px-2 py-1 rounded text-nowrap text-white " +
                            TASK_STATUS_CLASS_MAP[task.status]
                          }
                        >
                          {TASK_STATUS_TEXT_MAP[task.status]}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-nowrap">{task.due_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}