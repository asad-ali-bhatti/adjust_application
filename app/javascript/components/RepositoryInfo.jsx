import React from 'react'

export const RepositoryInfo = ({name, description, forks, starsCount,avatarUrl,url}) =>
    <tr>
        <td>
            <img src={avatarUrl} height={70}/>
        </td>
        <td>
            <a href={url} target="_blank">{name}</a>
        </td>
        <td>{description}</td>
        <td>{forks}</td>
        <td>{starsCount}</td>
    </tr>;