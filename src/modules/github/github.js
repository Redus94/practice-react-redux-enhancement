import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRepos, setLogin, setPhrase } from "./github.actions";

const GitHub = () => {
  const { login, phrase, repos } = useSelector((state) => state.github);
  const dispatch = useDispatch();

  function handleLoginChange(e) {
    const login = e.target.value;
    dispatch(setLogin(login));
    dispatch(getRepos(login));
  }

  console.log(repos);

  return (
    <section>
      <form>
        <input value={login} name="login" onChange={handleLoginChange} />
        <input
          value={phrase}
          name="phrase"
          onChange={(e) => dispatch(setPhrase(e.target.value))}
        />
      </form>
      <ul>
        {repos
          .filter((r) => r.name.includes(phrase))
          .map((r) => {
            <li key={r.id}>
              <a href={r.url}>{r.name}</a>
            </li>;
          })}
      </ul>
    </section>
  );
};

export default GitHub;
