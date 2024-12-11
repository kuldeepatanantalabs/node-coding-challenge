# Node.js Coding Challenge

The purpose of this coding challenge is to gauge knowledge in Node.js and TypeScript. In the coding challenge, you will build a Node.js api interface that an end user can consume to get a small subset of Aumni data.

We have provided a basic TypeScript boilerplate app that provides a server, PostgreSQL database, and testing harness. Please feel free to move things around according to your preference, e.g., moving the health check to your preferred file structure.

## Terminology

Some helpful terminology to help you understand the domain-specific terms:

- **Fund** - A Fund is a type of [Investment Vehicle](https://www.investopedia.com/terms/i/investmentvehicle.asp) that invests the money that it has raised into various **Companies**.
- **Company** - A Company that a **Fund** invests in. Traditionally called a Portfolio Company from the perspective of the **Fund**. This is typically a start-up company that is trying to raise money.

## Setup/Notes

1. Clone/Download this repository. We have seeded some data for you in the database.

2. Checkout branch and name it after yourself.

3. Make your first commit by filling out the `code-challenge-notes.md` file in the root of this directory.

4. This is a backend coding challenge. Please do **NOT** spend your time building out any kind of frontend UI.

5. You are allowed to install and use third-party packages.

## Getting Started

1. Ensure PostgreSQL is installed and running on your machine. **Note:** You may need to create the `postgres` user, i.e., `createuser -s postgres`
2. Run `npm i` to install dependencies.
3. Run `npm run seed` to create and seed the database.
4. Run `npm start` to start the server. The default URL and Port is `http://localhost:3000`.

## Goals

- [ ] Build out 4 endpoints.
- [ ] `/funds/` - Will return all funds and companies data
- [ ] `/funds/:id` - Will return a specific fund
- [ ] `/funds/:id/:companyId` - Will return a specific fund and company data
- [ ] `/funds/:id/?minCost=100&maxCost=100000` - Filter the companies for a specific fund

### Example of an Endpoint Schema Structure

For an endpoint like `/funds/1/33`, you would return a response:

```json
{
  "id": 1,
  "name": "Hodkiewicz-Veum Ventures",
  "companies": [
    {
      "id": 62,
      "name": "Hauck Infrastructure Inc.",
      "logo": "https://via.placeholder.com/200",
      "cost": 9638817,
      "ownershipPercentage": 0.06402042802555542,
      "impliedValue": 61708119,
      "founded": "2012-10-28"
    }
  ]
}
```

## Stretch Goals

- [ ] Setup and implement authentication with your endpoints
- [ ] Logging
- [ ] Expand the data set
- [ ] Additional comprehensive filters on companies and/or funds

## Acceptance Criteria

- [ ] You have filled out the _required_ parts of the `code-challenge-notes.md` and made your first commit.
- [ ] The code is well organized.
- [ ] The code follows Node.js/TypeScript best practices.
- [ ] Your Git commit history is clean and meaningful.
- [ ] The code should be free of linting errors.

## Submission

1. When you have your final commit complete, please zip up your entire folder.
