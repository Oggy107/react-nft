import React from 'react'
import { useSelector } from 'react-redux'

const Details = () => {
    const punkListData = useSelector((state) => (state.assets))
    const selected = useSelector((state) => (state.selected))
    const selectedPunk = punkListData[selected]

    return (
        <div className='details-container'>
            <img className='details-img' src={selectedPunk.image_url} alt="asset image" />
            <div className="details-info-container">
                <div className="details-info-common-container">
                    <h1 className='details-name'>{selectedPunk.name}</h1>
                    {
                        selectedPunk.description &&
                        <div className="details-desc-container">
                            <h4>{selectedPunk.description}</h4>
                        </div>
                    }
                </div>
                <div className="details-owner-container">
                    <div className="owner-profile-img-container">
                        <img className='owner-profile-img' src={selectedPunk.owner.profile_img_url} alt="owner profile pic" />
                    </div>
                    <p className="owner-address">{selectedPunk.owner.address}</p>
                </div>
            </div>
            <div className="details-traits-container">
                <h2>Traits</h2>
                <div className="table-container">

                <table>
                    <tr>
                        <th>trait type</th>
                        <th>value</th>
                    </tr>
                    {
                        selectedPunk.traits.map((trait) => {
                            return (
                                <tr>
                                        <td>{trait.trait_type}</td>
                                        <td>{trait.value}</td>
                                    </tr>
                                    )
                                })
                            }
                </table>
                </div>
            </div>
        </div>
    )
}

export default Details
