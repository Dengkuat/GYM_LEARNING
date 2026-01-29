import WhoU  from "./personal-Info";
import { Location } from "./intro";

export function ProfileCard({name, country, province, school, coure}){
  return(
    <div>
      <WhoU name={name}/>
      <Location
        country={country}
        province={province}
        school={school}
        course={coure}
      />
    </div>
  )
}