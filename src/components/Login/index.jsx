import React, { useEffect, useState } from "react";
import { login } from "../../api/request";

export const Login = () => {
  const [pseudo, setPseudo] = useState("");
  const [islading, setIsLoading] = useState(false);

  const loginApi = async () => {
    try {
      setIsLoading(true);
      const { data } = await login({ pseudo });
      setIsLoading(false);
      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data?.data));
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Connexion</h5>
                <div className="mt-3">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Pseudo</label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="pseudo"
                      name="pseudo"
                      onChange={(e) => setPseudo(e.target.value)}
                      aria-describedby="emailHelp"
                      placeholder="Veuillez saisir votre pseudo"
                    />
                  </div>
                  <div className="form-group">
                    {islading ? (
                      <div className="spinner-border" role="status" />
                    ) : (
                      <button
                        type="button"
                        disabled={pseudo.length === 0}
                        className="btn btn-primary"
                        onClick={loginApi}
                      >
                        Connexion
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
