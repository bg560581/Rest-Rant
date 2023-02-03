const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
        <main>
            <h1>Edit Place</h1>
            <form action={`/places/${data.id}?_method=PUT`} method="POST">
                
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input id="name"/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input id="pic"/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input id="city"/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="state">State</label>
                        <input id="state"/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input id="cuisines"/>
                    </div>
                </div>
                    <input type="submit" value="submit"/>
            </form>
        </main>
        </Def>
        )
}

module.exports = edit_form



