# React: Redux - Employee Management

### Scripts

1. `npm install` - To install all the dependencies
2. `npm start` - To start the application. Server will run on port 3000 `(http://localhost:3000)`
3. `npm test` - To execute all the tests

### Details

1.  `buildspec.yml` - Automated build, test
2.  Created a API gatewate to invoke Lamda function in AWS
3.  Lamda function returns Region and Version </br>
    exports.handler = async (event, context) => { </br>
    var arnList = (context.invokedFunctionArn).split(":"); </br>
    var lambdaRegion = arnList[3] //region is the fourth element in a lambda function arn </br>
    var runtime = 'Node - '+process.version; </br>
    //console.log(`Node.js ${process.version} on Lambda!`) </br>

          const response = {
                statusCode: 200,
                body: {region: lambdaRegion, runtime: runtime}
          };
          return response;

    };

### Appication details
