import * as React from "react"
import { cn } from "@/lib/utils"

function DataTable({
  className,
  children,
  ...props
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl">
      <div className="overflow-x-auto">
        <table
          className={cn("w-full", className)}
          {...props}
        >
          {children}
        </table>
      </div>
    </div>
  )
}

function DataTableHeader({
  className,
  children,
  ...props
}) {
  return (
    <thead
      className={cn(
        "bg-gradient-to-r from-gray-50/80 to-gray-100/80 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </thead>
  )
}

function DataTableBody({
  className,
  children,
  ...props
}) {
  return (
    <tbody
      className={cn("divide-y divide-gray-200/50", className)}
      {...props}
    >
      {children}
    </tbody>
  )
}

function DataTableRow({
  className,
  children,
  ...props
}) {
  return (
    <tr
      className={cn(
        "hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300 group",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  )
}

function DataTableHead({
  className,
  children,
  ...props
}) {
  return (
    <th
      className={cn(
        "px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider",
        className
      )}
      {...props}
    >
      {children}
    </th>
  )
}

function DataTableCell({
  className,
  children,
  ...props
}) {
  return (
    <td
      className={cn(
        "px-6 py-4 whitespace-nowrap text-sm text-gray-900 group-hover:text-gray-700 transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </td>
  )
}

export {
  DataTable,
  DataTableHeader,
  DataTableBody,
  DataTableRow,
  DataTableHead,
  DataTableCell,
}