import React, { memo } from 'react'

export default memo((props: { p: any }) => {
    console.log('childHook Render')
    return (
        <div>
            ChildHook Component
        </div>
    )
}
)