(async function Users() {
    const data = await fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => data.results)

    const containerLeft = document.querySelector('.container-left')
    const containerRight = document.querySelector('.container-right')

    containerLeft.innerHTML = ''
    containerRight.innerHTML = ''

    data.forEach((user, index) => {
        const p = document.createElement('p')

        p.innerText = user.name.first
        p.dataset.userIndex = index

        containerLeft.appendChild(p)
    })

    containerLeft.addEventListener(
        'click',
        (e) => {
            const user = data[e.target.dataset.userIndex]

            if (!user) return

            containerRight.innerHTML = ''

            const img = document.createElement('img')
            const name = document.createElement('p')
            const city = document.createElement('p')
            const flag = document.createElement('img')

            img.setAttribute('src', user.picture.medium)
            img.setAttribute('alt', user.name.first + ' ' + user.name.last)

            flag.setAttribute('src', `https://www.countryflags.io/${user.nat}/flat/64.png`)
            flag.setAttribute('alt', user.name.first + ' ' + user.name.last)

            name.innerText = user.name.first + ' ' + user.name.last
            city.innerText = `${user.location.city}, ${user.location.street}`

            containerRight.appendChild(img)
            containerRight.appendChild(name)
            containerRight.appendChild(city)
            containerRight.appendChild(flag)
        }
    )
})()
