import React, { Component } from 'react'

export default class Automation extends Component {
    render() {
        return (
            <div>
                <h5><i className="material-icons">settings</i> Automation Support Panels</h5>
                <ul className="collection">
                    <li className="collection-item">Automattic Power Factor</li>
                    <li className="collection-item">Correction Panel</li>
                    <li className="collection-item">VFD & PLC Panel</li>
                    <li className="collection-item">Changeover & Distribution Panel</li>
                    <li className="collection-item">Feeder Pillors</li>
                    <li className="collection-item">Motor & Power Control Center</li>
                </ul>
            </div>
        )
    }
}
