import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: null,
      name: null,
      location: null,
    };
  }

  componentDidMount() {
    this.getUserData(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    const prevUser = prevProps.match.params.userId;
    const currentUser = this.props.match.params.userId;

    if (prevUser !== currentUser) {
      this.getUserData(currentUser);
    }
  }

  getUserData = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json())
      .then(userData => {
        const { avatar_url, name, location } = userData;

        this.setState({
          avatar: avatar_url,
          name: name,
          location: location,
        });
      });
  };

  render() {
    const { avatar, name, location } = this.state;
    if (!avatar || !name || !location) {
      return null;
    }

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

/* const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        throw new Error();
      })
      .then(userData => {
        setUserData(userData);
      });
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { name, location, avatar_url } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
}; */

// algo:
// 1. create empty state
// 2. make http call in componentDidMount
// 3. handle userId change

export default User;
