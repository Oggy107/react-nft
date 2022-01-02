import React from 'react'
import { useSelector } from 'react-redux'

const Details = () => {
    const punkListData = useSelector((state) => (state.assets))
    const selected = useSelector((state) => (state.selected))
    const selectedPunk = punkListData[selected]

    return (
        <div className='details-container'>
            <img className='details-img' src={selectedPunk.image_url} alt="asset" />
            <div className="details-info-container">
                <div className="details-info-common-container">
                    <h1 className='details-name'>{selectedPunk.name}</h1>
                    {
                        selectedPunk.description &&
                        <div className="details-desc-container">
                            <p>{selectedPunk.description}</p>
                        </div>
                    }
                </div>
                <div className="details-owner-container">
                    <div className="owner-profile-img-container">
                        <img className='owner-profile-img' src={selectedPunk.owner.profile_img_url} alt="owner" />
                    </div>
                    <p className="owner-address">{selectedPunk.owner.address}</p>
                </div>
            </div>
            <div className="details-traits-container">
                <h2>Traits</h2>

                <div className="table-container">
                    {
                        selectedPunk.traits[0] ?
                        <table>
                            <thead>
                                <tr>
                                    <th>trait type</th>
                                    <th>value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    selectedPunk.traits.map((trait, index) => {
                                        return (
                                                <tr key={index}>
                                                    <td>{trait.trait_type}</td>
                                                    <td>{trait.value}</td>
                                                </tr>
                                                )
                                            })
                                }
                            </tbody>
                        </table> :
                        <h4>None</h4>
                    }
                </div>
            </div>
        </div>
    )
}

export default Details
