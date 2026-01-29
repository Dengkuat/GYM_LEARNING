export function Address({ country, province }) {
  return (
    <div>
      <p>Country: {country}</p>
      <p>Province: {province}</p>
    </div>
  );
}

export function Biography({ school, course }) {
  return (
    <div>
      <p>School: {school}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export function Location({ country, province, school, course }) {
  return (
    <div>
      <Address country={country} province={province} />
      <Biography school={school} course={course} />
    </div>
  );
}