# Nest-GraphQl-ResolveProperty-Args-Problem

When resolving a property - args of ResolveProperty are not populated with originally received data. This repository tries to reproduce this.

Reproduction steps:

- run `npm i`
- run `npm start`
- navigate to `http://localhost:3000/graphql`
- execute following query:

```gql
{
  getData(criteria: { filter: { name: "test" } }) {
    totalCount
    list
  }
}
```

- Console prints the following:

```
getData [Object: null prototype] {
  filter: [Object: null prototype] { name: 'test' }
}
getTotalCount args:  {}
```

- Problem:

  - criteria parameter is populated for getData Query function, but args parameter is not populated in getTotalCount ResolveProperty function
  - Trying out @Args decorator did not help.

- Workaround:
  - Execute a query like this:

```gql
query GetData($criteria: CriteriaDto) {
  getData(criteria: $criteria) {
    totalCount
    list
  }
}
```

- With Query variable values like this:

```json
{
  "criteria": {
    "filter": {
      "name": "test"
    }
  }
}
```

- In this case, value will be available inside info parameter, variableValues property
