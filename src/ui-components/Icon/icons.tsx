import { ReactComponent as Brain } from '../../assets/icons/brain.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg'
import { ReactComponent as Bar } from '../../assets/icons/bar.svg'
import { ReactComponent as Close } from '../../assets/icons/close.svg'
import { ReactComponent as Coffe } from '../../assets/icons/coffe.svg'
import { ReactComponent as DotsThree } from '../../assets/icons/dots-three.svg'
import { ReactComponent as FastForward } from '../../assets/icons/fast-forward.svg'
import { ReactComponent as Gear } from '../../assets/icons/gear.svg'
import { ReactComponent as Pause } from '../../assets/icons/pause.svg'
import { ReactComponent as Play } from '../../assets/icons/play.svg'
import { ReactComponent as Return } from '../../assets/icons/return.svg'

export const icons = {
  brain: Brain,
  arrowRight: ArrowRight,
  bar: Bar,
  close: Close,
  coffe: Coffe,
  dotsThree: DotsThree,
  fastForward: FastForward,
  gear: Gear,
  pause: Pause,
  play: Play,
  return: Return,
}

export type ThemeIcons = keyof typeof icons
