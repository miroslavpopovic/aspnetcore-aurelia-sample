import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject('serverConfig', HttpClient)
export class App {
    data;
    message = 'Hello World!';
    http;
    serverConfig;

    constructor(serverConfig, http) {
        this.serverConfig = serverConfig;
        this.http = http;

        http.configure(config => {
            config
                .useStandardConfiguration()
                .withBaseUrl('/api/')
                .withDefaults({
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + serverConfig.token
                    }
                });
        });
    }

    loadData() {
        this.http.fetch('data')
            .then(response => response.json())
            .then(result => {
                this.data = result.data;
            });
    }
}
