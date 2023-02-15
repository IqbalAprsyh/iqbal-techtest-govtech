FROM cypress/included:12.5.1

RUN mkdir /iqbal-techtest

WORKDIR /iqbal-techtest

COPY ./package.json .

COPY ./cypress.config.js .

COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT [ "npx", "cypress", "run" ]

CMD [""]