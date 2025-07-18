import React from 'react'
import CountUp from 'react-countup'

const metrics = [
  { label: 'Projects Completed', value: 30 },
  { label: 'Countries Served', value: 20 },
  { label: 'Revenue Influenced ($M)', value: 100 },
  { label: 'Students Taught', value: 300 }
]

export default function Metrics() {
  return (
    <section className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center bg-gray-50">
      {metrics.map(({ label, value }) => (
        <div key={label} className="shadow p-4 bg-white rounded">
          <h2 className="text-3xl font-bold text-blue-600">
            <CountUp end={value} duration={2} />
          </h2>
          <p className="mt-2 text-sm">{label}</p>
        </div>
      ))}
    </section>
  )
}
