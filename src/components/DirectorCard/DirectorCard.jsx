const DirectorCard = ({ image, name, role }) => {
  return (
    <div className="director-card">
      <img src={image} alt={name} style={{borderRadius:12, height:140, objectFit:'cover', width:'100%'}} />
      <h4 style={{marginTop:12}}>{name}</h4>
      <span style={{color:'#6b7280'}}>{role}</span>
    </div>
  )
}

export default DirectorCard
