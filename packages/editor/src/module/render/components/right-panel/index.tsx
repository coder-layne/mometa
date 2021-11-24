import * as React from 'react'
import * as p from 'prefix-classname'
import { CLS_PREFIX } from '../../../config/const'

const cn = p('')
const c = p(`${CLS_PREFIX}-rpanel`)

export interface RightPanelProps {
  className?: string
}

const RightPanel: React.FC<RightPanelProps> = React.memo(({ className }) => {
  return <div className={cn(c(), className)}></div>
})

RightPanel.defaultProps = {}

export default RightPanel
