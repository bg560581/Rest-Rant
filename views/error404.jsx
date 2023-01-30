const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p className='Par'>Oops, sorry, we can't find this page!</p>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-photos-of-cats-in-mug-1593184777.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=768:*" alt="Cat with head in mug" />
            </main>
        </Def>
    )
}

module.exports = error404