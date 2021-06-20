import React, { useState, useEffect } from 'react'

export default function index() {
    const [date, updateDate] = useState(new Date().toLocaleString())
    useEffect(() => {
        setInterval(() => {
            updateDate(new Date().toLocaleString())
        }, 1000)
    }, [])
    return (
        <div>
            hello this is my {date}
        </div>
    )
}
