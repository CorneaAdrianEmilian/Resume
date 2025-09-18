<<<<<<< HEAD
export default function Profile(props)
{
return(
<section className="profile_container">

<img className="profile_picture" src={props.picture} alt="profile pic" />

<div className="profile_text_container">
<p className="profile_greetings">{props.greetings}</p>
<p className="profile_description">{props.description}</p>
</div>

</section>
)

=======
export default function Profile(props)
{
return(
<section className="profile_container">

<img className="profile_picture" src={props.picture} alt="profile pic" />

<div className="profile_text_container">
<p className="profile_greetings">{props.greetings}</p>
<p className="profile_description">{props.description}</p>
</div>

</section>
)

>>>>>>> 11b5e12517cbf8ba8edccb421beea3a9ae870b45
}