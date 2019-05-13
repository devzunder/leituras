export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('pt-BR')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }


export const generateUID = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
  
  

  
  
