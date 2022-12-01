const ConvertTime = (time) => {
  if (time.search('T') === -1)
    return time = time.replace(' ', 'T')
    else if (time.length === 19) return time = time.replace('T', ' ') 
    else return time = time.replace('T', ' ') + ':00' 
}

export default ConvertTime