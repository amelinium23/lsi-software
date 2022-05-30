import { Dispatch, FunctionComponent } from 'react'
import { Modal } from 'react-bootstrap'
import { ACTION_TYPES } from '../state/Reducer'
import { Action } from '../state/types/State'

interface IErrorModalProps {
  dispatch: Dispatch<Action<string>>
  errorMessage: string
}

const ErrorModal: FunctionComponent<IErrorModalProps> = ({
  dispatch,
  errorMessage,
}) => {
  return (
    <Modal
      show={!!errorMessage}
      onHide={() =>
        dispatch({ type: ACTION_TYPES.SET_ERROR_MESSAGE, payload: '' })
      }
    >
      <Modal.Header closeButton>Error</Modal.Header>
      <Modal.Body>{errorMessage}</Modal.Body>
    </Modal>
  )
}

export default ErrorModal
