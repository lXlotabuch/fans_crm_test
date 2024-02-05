const sleep = (time : number) : Promise<void> => {
    return new Promise((res) => {
        setTimeout(() => res(), time)
    })
}

export default sleep