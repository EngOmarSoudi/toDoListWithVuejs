<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(){
        return Task::orderBy('created_at','DESC')->get();
    }
    public function store(Request $request){
        $newTask=new Task;
        $newTask::create([
            'title' => $request->Task['title'],
            'date' => $request->Task['date'],
            'time' => $request->Task['time'],
            'completed' => $request->Task['completed'],
            'details' => $request->Task['details'],
            'completed_at' => '2022-11-10 06:06:27',
            'user_id' => $request->Task['user_id'],
        ]) ;

        return $newTask;
    }

}
