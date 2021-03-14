

const GeneratorForm = ({inputs, handleInputChange, handleFormSubmit}) => {

    return (
        <div className="container d-flex justify-content-center">
            <div className="col-6 align-self-center border mt-5 mb-3">
                <form onSubmit={handleFormSubmit} className="my-3">
                    <div className="form-group row">
                        <label 
                            htmlFor="color" 
                            className="col-3 text-right col-form-label"
                            >Color:
                        </label>
                        <div className="col-8">
                            <input 
                                type="text" 
                                name="color"
                                placeholder="Type a Color"
                                className="form-control"
                                onChange={handleInputChange}
                                value={inputs.color}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label 
                            htmlFor="height" 
                            className="col-3 text-right col-form-label"
                            >Height:
                        </label>
                        <div className="col-8">
                        <input 
                            type="text" 
                            name="height"
                            className="form-control"
                            onChange={handleInputChange}
                            value={inputs.height}
                        />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label 
                            htmlFor="width" 
                            className="col-3 text-right col-form-label"
                            >Width:
                        </label>
                        <div className="col-8">
                        <input 
                            type="text" 
                            name="width"
                            className="form-control"
                            onChange={handleInputChange}
                            value={inputs.width}
                        />
                        </div>
                    </div>
                    <input 
                        type="submit" 
                        value="Submit" 
                        className="btn btn-primary btn-outline-dark text-white mx-3"
                    />
                </form>
            </div>
        </div>
    )
}

export default GeneratorForm;