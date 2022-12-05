import { ProgressBar } from 'react-loader-spinner'

export const Loader = () => {

    return <ProgressBar
    height="150"
    width="80"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass="progress-bar-wrapper"
    borderColor = '#f21890'
    barColor = '#0bc2de'
  />
}