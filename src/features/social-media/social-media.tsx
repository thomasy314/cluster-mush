import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link, Tooltip } from '@mui/material';


export const instagramName: string = 'clustermush';
export const instagramLink: string = `https://www.instagram.com/${instagramName}/`;

export const ClusterMushInstagramIcon = () => {
    return (
            <Link className="socialIcon" href={instagramLink}><Tooltip title={`@${instagramName}`}><InstagramIcon fontSize='medium'/></Tooltip></Link>
    )
}

export const emailLink: string = 'tom@clustermush.com';

export const ClusterMushEmailIcon = () => {
    return (
        <Link className="socialIcon" href={`mailto:${emailLink}`}><Tooltip title={emailLink}><MailOutlineIcon fontSize='medium'/></Tooltip></Link>
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