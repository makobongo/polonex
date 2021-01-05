<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PoloniexController extends Controller
{
    public function return24hVolume(){
        $results = Http::get('https://poloniex.com/public?command=return24hVolume')->json();
        dd($results);
//        return ['msg' => 'success!'];
    }

}
