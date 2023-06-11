import { useSelector, useDispatch } from 'react-redux'
import { changeNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const dispatch = useDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notification) {
    setTimeout(() => {
      dispatch(changeNotification(null, 0))
    }, notification.timeout)
    return (
      <div style={style}>
        {notification.content}
      </div>
    )
  }
  else {
    return null
  }
  
}

export default Notification