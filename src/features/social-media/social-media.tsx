import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Tooltip } from '@mui/material';


export const instagramName: string = 'clustermush';
export const instagramLink: string = `https://www.instagram.com/${instagramName}/`;

export const ClusterMushInstagramIcon = () => {
    return (
            <a className="socialIcon" href={instagramLink}><Tooltip title={`@${instagramName}`}><InstagramIcon fontSize='medium'/></Tooltip></a>
    )
}

export const emailLink: string = 'tom@clustermush.com';

export const ClusterMushEmailIcon = () => {
    return (
        <a className="socialIcon" href={`mailto:${emailLink}`}><Tooltip title={emailLink}><MailOutlineIcon fontSize='medium'/></Tooltip></a>
    )
}

export const SocialIcons = () => {
    return (
        <div>
            <ClusterMushInstagramIcon />
            <ClusterMushEmailIcon />
        </div>
    )
}