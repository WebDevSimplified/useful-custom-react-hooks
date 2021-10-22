import useOnlineStatus from "./useOnlineStatus"

export default function OnlineStatusComponent() {
  const online = useOnlineStatus()

  return <div>{online.toString()}</div>
}
