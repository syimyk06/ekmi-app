import './User.scss';

export const User = ({ user }) => {
  const { id, name, email, phone } = user;
  return (
    <>
      <div className="user">
        <h3 className="user__name">{name.split(" ")[0]}</h3>
        <h4 className="user__email">{email}</h4>
        <h4 className="user__phone">{phone}</h4>
        <div className="user__id">{id < 10 ? '0'+ id : id}</div>
      </div>
    </>
  );
};
