function year() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <span>{year}</span>
        </>
  )
}

export default year;