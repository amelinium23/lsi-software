import { Button, ButtonGroup } from 'react-bootstrap'
import { Dispatch, FunctionComponent } from 'react'
import { Action } from '../state/types/State'
import { ACTION_TYPES } from '../state/Reducer'

interface IThemeChanger {
  theme: string
  dispatch: Dispatch<Action<string>>
}

const ThemeChanger: FunctionComponent<IThemeChanger> = ({
  theme,
  dispatch,
}) => {
  const onThemeChange = (e: any) => {
    const value = e.target.textContent.toLowerCase()
    dispatch({ type: ACTION_TYPES.SET_THEME, payload: value })
  }

  return (
    <ButtonGroup className="rowStyle">
      <Button
        onClick={onThemeChange}
        variant={`outline-${theme}`}
        active={theme === 'light'}
      >
        Light
      </Button>
      <Button
        onClick={onThemeChange}
        variant={`outline-${theme}`}
        active={theme === 'dark'}
      >
        Dark
      </Button>
    </ButtonGroup>
  )
}

export default ThemeChanger
