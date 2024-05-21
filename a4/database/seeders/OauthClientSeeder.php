<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\OauthClient;

class OauthClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $OauthClient1=new OauthClient();
        $OauthClient1->id= 1;
        $OauthClient1->user_id=NULL;
        $OauthClient1->name= 'Laravel Personal Access Client';
        $OauthClient1->secret= 'H7VqoZfGG2ReS4gkjjB4wIzcfQO4pOKyfFJNvGJy';
        $OauthClient1->provider= NULL;
        $OauthClient1->redirect= 'http://localhost';
        $OauthClient1->personal_access_client= 1;
        $OauthClient1->password_client= 0;
        $OauthClient1->revoked= 0;
        $OauthClient1->created_at= '2023-10-27 23:56:57';
        $OauthClient1->updated_at= '2023-10-27 23:56:57';
        $OauthClient1->save();

        $OauthClient2=new OauthClient();
        $OauthClient2->id= 2;
        $OauthClient2->user_id=NULL;
        $OauthClient2->name= 'Laravel Password Grant Client';
        $OauthClient2->secret= 'ZmD1skLjeRmymtJhrws1i1vOewNruqcO7ZG7J8kB';
        $OauthClient2->provider= 'users';
        $OauthClient2->redirect= 'http://localhost';
        $OauthClient2->personal_access_client= 0;
        $OauthClient2->password_client= 1;
        $OauthClient2->revoked= 0;
        $OauthClient2->created_at= '2023-10-27 23:56:57';
        $OauthClient2->updated_at= '2023-10-27 23:56:57';
        $OauthClient2->save();
    }
}
