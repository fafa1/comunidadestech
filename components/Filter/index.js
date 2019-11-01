import React, { Component } from 'react';
import styles from './styles';
import { STATES } from '../../utils/states';

class Filter extends Component {
  unify = (array, object) => {
    const item = [...new Set(array.map((x) => x[`${object}`]))].filter(
      (x) => x
    );
    return item;
  };

  render() {
    const {
      list,
      select,
      reset,
      location,
      state,
      tags,
      country,
      model,
      inputOk,
      selectionFemale,
      selectionMale,
      inputValue,
      focus,
    } = this.props;

    return (
      <div className="columns filter">
        <div className="column filter-box">
          <div className="filter-title">
            <h4 className="filter-label">Filtro</h4>
          </div>
          <div className="filter-options">
            <div className="filter-option-wrapper">
              <div className="filter-label">Categoria</div>
              <div className="filter-option">
                <div className="control has-icons-left">
                  <div className="select is-small">
                    <select
                      value={selectionFemale}
                      name="category"
                      onChange={(event) => select(event)}
                    >
                      <option value="Todas">Todas</option>
                      {this.unify(list, 'category').map((item, index) => (
                        <option value={item} key={`${index}-${item}`}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <span className="icon is-small is-left">
                    <i className="fas fa-list"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-option-wrapper">
              <div className="filter-label">Tag</div>
              <div className="filter-option">
                <div className="control has-icons-left">
                  <div className="select is-small">
                    <select
                      value={selectionFemale}
                      name="tags"
                      onChange={(event) => select(event)}
                    >
                      <option>Todas</option>
                      {tags.sort().map(
                        (tag, index) =>
                          tag.length <= 20 && (
                            <option value={tag} key={`${index}-${tag}`}>
                              {tag}
                            </option>
                          )
                      )}
                    </select>
                  </div>
                  <span className="icon is-small is-left">
                    <i className="fas fa-tag"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-option-wrapper">
              <div className="filter-label">Modelo</div>
              <div className="filter-option">
                <div className="control has-icons-left">
                  <div className="select is-small">
                    <select
                      value={model}
                      name="model"
                      onChange={(event) => select(event)}
                    >
                      <option value="Ambos">Ambos</option>
                      <option value="Presencial">Presencial</option>
                      <option value="Online">Online</option>
                    </select>
                  </div>
                  <span className="icon is-small is-left">
                    <i className="fas fa-tag"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-option-wrapper">
              <div className="filter-label">País</div>
              <div className="filter-option">
                <div className="control has-icons-left">
                  <div className="select is-small">
                    {(model === 'Online' && (
                      <select disabled title="Selecione um modelo diferente">
                        <option>Todos</option>
                      </select>
                    )) || (
                      <select
                        value={selectionMale}
                        name="country"
                        onChange={(event) => select(event)}
                      >
                        <option>Todos</option>
                        {(model !== 'Online' &&
                          Object.keys(location).map((item, index) => (
                            <option value={item} key={`${index}-${item}`}>
                              {item}
                            </option>
                          ))) || <option>Selecione um modelo diferente</option>}
                      </select>
                    )}
                  </div>
                  <span className="icon is-small is-left">
                    <i className="fas fa-globe"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-option-wrapper">
              <div className="filter-label">Estado</div>
              <div className="filter-option">
                <div className="control has-icons-left">
                  <div className="select is-small">
                    {(!location[`${country}`] && (
                      <select disabled title="Selecione um país">
                        <option>Todos</option>
                      </select>
                    )) || (
                      <select name="state" onChange={(event) => select(event)}>
                        <option>Todos</option>
                        {(location[`${country}`] &&
                          Object.keys(location[`${country}`])
                            .sort()
                            .map((item, index) => (
                              <option key={`${index}-${item}`} value={item}>
                                {STATES[item]}
                              </option>
                            ))) || <option>Selecione um país</option>}
                      </select>
                    )}
                  </div>
                  <span className="icon is-small is-left">
                    <i className="fas fa-map"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-option-wrapper">
              <div className="filter-label">Cidade</div>
              <div className="filter-option">
                <div className="control has-icons-left">
                  <div className="select is-small">
                    {(!location['Brasil'][`${state}`] && (
                      <select disabled title="Selecione um estado">
                        <option>Todos</option>
                      </select>
                    )) || (
                      <select name="city" onChange={(event) => select(event)}>
                        <option>Todos</option>
                        {(location['Brasil'][`${state}`] &&
                          [...new Set(location['Brasil'][`${state}`])].map(
                            (item, index) => (
                              <option key={`${index}-${item}`}>{item}</option>
                            )
                          )) || <option>Selecione um estado</option>}
                      </select>
                    )}
                  </div>
                  <span className="icon is-small is-left">
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-option-wrapper filter-by-name">
              <div className="filter-label">Nome</div>
              <div className="filter-option">
                <form>
                  <div className="control has-icons-left">
                    <input
                      onChange={inputOk}
                      onFocus={focus}
                      className="input is-small"
                      type="text"
                      placeholder="Nome da comunidade"
                      value={inputValue}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="reset-title">
            <div className="reset-label" onClick={(event) => reset(event)}>
              <i className="fa fa-refresh"></i> Resetar Filtro
            </div>
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Filter;